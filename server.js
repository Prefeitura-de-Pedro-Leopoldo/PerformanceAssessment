require('dotenv').config();
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB por arquivo
    files: 20 // Máximo 20 arquivos
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Apenas arquivos PDF são permitidos!'), false);
    }
  }
});

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true', // true para porta 465, false para outras portas
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Rota de upload e envio de email
app.post('/api/upload', upload.array('files[]', 20), async (req, res) => {
  try {
    const { emailRemetente, departamento, observacoes } = req.body;
    const files = req.files;

    // Validação
    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Nenhum arquivo foi enviado.'
      });
    }

    if (!emailRemetente || !departamento) {
      return res.status(400).json({
        success: false,
        message: 'Email e departamento são obrigatórios.'
      });
    }

    // Preparar lista de arquivos para o email
    const filesList = files.map(file => ({
      filename: file.originalname,
      size: (file.size / 1024).toFixed(2) + ' KB',
      path: file.path
    }));

    const totalSize = files.reduce((acc, file) => acc + file.size, 0);
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

    // Preparar anexos para o email
    const attachments = files.map(file => ({
      filename: file.originalname,
      path: file.path
    }));

    // HTML do email
    const emailHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Avaliações de Desempenho</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

          <!-- Cabeçalho -->
          <tr>
            <td style="background: linear-gradient(135deg, #003d82 0%, #0056b3 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                📋 Avaliações de Desempenho
              </h1>
              <p style="margin: 10px 0 0 0; color: #e0e0e0; font-size: 14px;">
                Prefeitura de Pedro Leopoldo
              </p>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td style="padding: 30px;">

              <!-- Informações do Remetente -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #003d82; border-radius: 5px;">
                    <h2 style="margin: 0 0 15px 0; color: #003d82; font-size: 18px; font-weight: 600;">
                      Informações do Envio
                    </h2>
                    <table width="100%" cellpadding="5" cellspacing="0">
                      <tr>
                        <td style="color: #666; font-size: 14px; padding: 5px 0;">
                          <strong style="color: #333;">📧 Email:</strong>
                        </td>
                        <td style="color: #003d82; font-size: 14px; padding: 5px 0;">
                          ${emailRemetente}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #666; font-size: 14px; padding: 5px 0;">
                          <strong style="color: #333;">🏢 Departamento:</strong>
                        </td>
                        <td style="color: #003d82; font-size: 14px; padding: 5px 0;">
                          ${departamento}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #666; font-size: 14px; padding: 5px 0;">
                          <strong style="color: #333;">📅 Data/Hora:</strong>
                        </td>
                        <td style="color: #003d82; font-size: 14px; padding: 5px 0;">
                          ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Arquivos Anexados -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px 0; color: #003d82; font-size: 18px; font-weight: 600; border-bottom: 2px solid #003d82; padding-bottom: 10px;">
                      📎 Arquivos Anexados (${files.length})
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                    ${filesList.map((file, index) => `
                      <div style="padding: 10px; margin-bottom: ${index < filesList.length - 1 ? '10px' : '0'}; background-color: #ffffff; border-left: 3px solid #28a745; border-radius: 3px; display: flex; align-items: center;">
                        <span style="color: #28a745; font-size: 18px; margin-right: 10px;">📄</span>
                        <div style="flex: 1;">
                          <div style="color: #333; font-size: 14px; font-weight: 500;">${file.filename}</div>
                          <div style="color: #999; font-size: 12px; margin-top: 3px;">${file.size}</div>
                        </div>
                      </div>
                    `).join('')}
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd; text-align: right;">
                      <span style="color: #666; font-size: 13px;">
                        <strong>Tamanho Total:</strong> <span style="color: #003d82;">${totalSizeMB} MB</span>
                      </span>
                    </div>
                  </td>
                </tr>
              </table>

              ${observacoes ? `
              <!-- Observações -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px 0; color: #003d82; font-size: 18px; font-weight: 600;">
                      💬 Observações
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #fff8e1; padding: 15px; border-left: 4px solid #ffc107; border-radius: 5px;">
                    <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                      ${observacoes}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #999; font-size: 12px; line-height: 1.6;">
                Este é um email automático do Sistema de Avaliação de Desempenho<br>
                <strong style="color: #003d82;">Prefeitura de Pedro Leopoldo</strong> - MG<br>
                <em>Não responda este email</em>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Enviar email
    const mailOptions = {
      from: `"Sistema de Avaliação - Prefeitura de Pedro Leopoldo" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📋 Nova Avaliação de Desempenho - ${departamento}`,
      html: emailHTML,
      attachments: attachments
    };

    await transporter.sendMail(mailOptions);

    // Deletar arquivos após envio
    files.forEach(file => {
      fs.unlinkSync(file.path);
    });

    res.json({
      success: true,
      message: 'Email enviado com sucesso!',
      data: {
        totalFiles: files.length,
        totalSize: totalSizeMB + ' MB',
        departamento: departamento,
        emailRemetente: emailRemetente
      }
    });

  } catch (error) {
    console.error('Erro ao processar upload:', error);

    // Limpar arquivos em caso de erro
    if (req.files) {
      req.files.forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erro ao enviar email: ' + error.message
    });
  }
});

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Servidor Node.js está funcionando!',
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📧 Email de destino: ${process.env.EMAIL_TO}`);
});
