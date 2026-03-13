# Guia de Integração de Contacto

## Estrutura Atual

Atualmente, as seções de contacto mostram:
- Localização (Endereço)
- Telefone (Link direto)
- Email (Link direto)
- Botão WhatsApp flutuante

## 1. Informações de Contacto

### Quintela Cycling
```
📍 Endereço: Rua da Vila Corneliana, 1125 - Correlhã, Ponte de Lima, Portugal, 4990-307
📞 Telefone: +351 258 941 075
📧 Email: geral@casaquintelalda.com
💬 WhatsApp: +351 258 941 075
```

### Casa Quintela
```
📍 Endereço: Rua da Vila Corneliana, 1125 - Correlhã, Ponte de Lima, Portugal, 4990-307
📞 Telefone: +351 258 941 075
📧 Email: geral@casaquintelalda.com
💬 WhatsApp: +351 258 941 075
```

## 2. Atualizar Links de Contacto

### Arquivo: `components/quintela-cycling/contact-section.tsx`

Localizar e substituir:

```tsx
// Telefone
<a href="tel:+351XXXXXXXXX">
  +351 XXXXXXXXX  // ← Adicione número real
</a>

// Email
<a href="mailto:geral@casaquintelalda.com">
  geral@casaquintelalda.com
</a>
```

### Arquivo: `components/casa-quintela/contact-section.tsx`

```tsx
// Telefone
<a href="tel:+351XXXXXXXXX">
  +351 XXXXXXXXX  // ← Adicione número real
</a>

// Email
<a href="mailto:geral@casaquintelalda.com">
  geral@casaquintelalda.com
</a>
```

### Arquivo: `app/quintelacycling/page.tsx`

```tsx
<motion.a
  href="https://wa.me/351XXXXXXXXX"  // ← Adicione número real (sem +)
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle size={24} />
</motion.a>
```

### Arquivo: `app/casaquintela/page.tsx`

```tsx
<motion.a
  href="https://wa.me/351XXXXXXXXX"  // ← Adicione número real (sem +)
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle size={24} />
</motion.a>
```

## 3. Integração de Formulário de Contacto (Opcional)

Se quiser adicionar um formulário, você pode:

### Opção 1: Formspree (Recomendado - Fácil)

```tsx
// components/contact-form.tsx
export default function ContactForm() {
  return (
    <form 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST"
      className="space-y-4"
    >
      <input 
        type="text" 
        name="name" 
        placeholder="Nome" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        required 
      />
      <textarea 
        name="message" 
        placeholder="Mensagem" 
        required 
      />
      <button type="submit">Enviar</button>
    </form>
  )
}
```

### Opção 2: Email API (Resend)

```bash
npm install resend
```

```tsx
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  try {
    const data = await resend.emails.send({
      from: 'geral@casaquintelalda.com',
      to: 'geral@casaquintelalda.com',
      subject: `Nova mensagem de ${name}`,
      html: `<p>${message}</p><p>Email: ${email}</p>`,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
```

### Opção 3: Node Mailer (Self-Hosted)

```bash
npm install nodemailer
```

```tsx
// app/api/contact/route.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  try {
    await transporter.sendMail({
      from: 'geral@casaquintelalda.com',
      to: 'geral@casaquintelalda.com',
      subject: `Nova mensagem de ${name}`,
      text: message,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error })
  }
}
```

## 4. Integração com Google Maps

### Adicionar Mapa na Seção de Contacto

Substituir na `contact-section.tsx`:

```tsx
{/* Map Placeholder */}
<motion.div
  variants={itemVariants}
  className="w-full h-64 bg-gray-900 border border-gray-800 flex items-center justify-center mb-8"
>
  {/* Usar Google Maps Embed */}
  <iframe
    width="100%"
    height="400"
    frameBorder="0"
    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.123456789!2d-8.123456!3d41.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQuJQ!5e0!3m2!1spt!2spt!4v1234567890`}
    style={{ border: 0, width: '100%' }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</motion.div>
```

## 5. Chat Widget (Opcional)

### Integrar Chatbot

Exemplo com Crisp:

```tsx
// Adicionar ao layout.tsx
<script type="text/javascript">
  (function() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "YOUR_WEBSITE_ID";
    var d = document;
    var s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>
```

Ou com Zendesk:

```tsx
<script id="ze-snippet">
  window.zESettings = { 
    webWidget: { position: { vertical: 'bottom', horizontal: 'right' } } 
  };
  (function (w, d) {
    var s = d.createElement('script');
    s.src = 'https://static.zdassets.com/ekr/snippet.js?key=YOUR_KEY';
    s.type = 'text/javascript';
    d.head.appendChild(s);
  })(window, document);
</script>
```

## 6. Otimizar Links de Contacto

### Links Telefónico
```
tel:+351258941075  ✓ Correto (com +)
```

### Links de Email
```
mailto:geral@casaquintelalda.com         ✓ Simples
mailto:geral@casaquintelalda.com?subject=Assunto&body=Corpo
```

### Links WhatsApp
```
https://wa.me/351258941075                    ✓ Correto (sem +)
https://wa.me/351258941075?text=Olá!         ✓ Com mensagem pré-escrita
```

## 7. Otimização para SEO de Contacto

Adicionar JSON-LD schema:

```tsx
// components/contact-schema.tsx
export const ContactSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Quintela Cycling",
        "url": "https://quintelacycling.pt",
        "telephone": "+351258941075",
        "email": "geral@casaquintelalda.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua da Vila Corneliana, 1125",
          "addressLocality": "Correlhã",
          "addressRegion": "Ponte de Lima",
          "postalCode": "4990-307",
          "addressCountry": "PT"
        }
      })
    }}
  />
)
```

## 8. Analytics de Contacto

### Google Analytics
```tsx
// Rastrear cliques em emails
onClick={() => {
  gtag.event('contact_email_click', {
    value: 'geral@casaquintelalda.com'
  })
}}
```

## 9. Variáveis de Ambiente Necessárias

Se usar APIs de email:

```env
# .env.local

# Resend
RESEND_API_KEY=re_XXXxxxxxxxxxxxxxxxxxx

# Nodemailer
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-app-password

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaSyDxxxxxxxxxxxxx
```

## 10. Teste de Contacto

### Checklist de Testes
- [ ] Telefone clicável abre dialer
- [ ] Email clicável abre cliente de email
- [ ] WhatsApp abre chat
- [ ] Mapa carrega e é interativo
- [ ] Formulário envia (se implementado)
- [ ] Responsivo em mobile
- [ ] Acessível com teclado

---

**Próximos Passos:**
1. Substituir números de telefone reais
2. Escolher e implementar método de contacto preferido
3. Testar todos os links
4. Adicionar mapa (Google Maps recomendado)
5. (Opcional) Implementar formulário de contacto
