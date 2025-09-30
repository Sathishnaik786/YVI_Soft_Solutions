### Backend Contact & Email Logic – Review and Implementation Guide

This document explains the current backend logic for the Contact page and email sending in this project, identifies gaps, reviews security, and provides a concise guide to implement the same functionality in another website.

---

### Files and Entry Points
- **Backend server**: `backend/server.js`
- **Backend docs**: `backend/README.md`
- **Backend package manifest**: `backend/package-backend.json`

No separate controllers/services or database files for Contact CRUD were found. The only Contact-related backend logic is the email sending endpoint.

---

### Contact CRUD Backend Flow (Current State)
- **Status**: Not implemented in this repo.
- No routes for create/retrieve/update/delete of contacts.
- No database model or queries, and no `Database/` directory present here.
- `@supabase/supabase-js` is listed as a dependency but is not used in `backend/server.js`.

If/when CRUD is added, it would typically live under `backend/` as Express routes and controllers/services, with DB integration (e.g., Supabase/Postgres).

---

### Email Sending Flow

- **Endpoint**: `POST /api/send-email` (Express)
- **Purpose**: Sends an email from the contact form; can either accept raw `html` or generate a template when `template === "contact-form"` with `data`.
- **Flow**:
  1. Parse JSON body and set JSON response headers.
  2. Validate minimal required fields (`from`, `subject`).
  3. Compute recipient (`to` request field or `EMAIL_TO` env; defaults to `sanjeevirr@yvisoft.com`).
  4. Force sender to the configured company address (`EMAIL_USER`) while using `replyTo` as the user-provided `from`.
  5. If `template === "contact-form"` and `data` is provided, build HTML using `generateContactFormEmail(data)`.
  6. Attempt send with Nodemailer, retrying up to 3 times with a 2s delay.
  7. Return JSON success with `messageId`, or error JSON with details.

- **Key functions**:
  - `initializeTransporter()`
    - Creates a Nodemailer transporter with STARTTLS on port 587 (host defaults to `smtpout.secureserver.net`).
    - Verifies the connection; on failure, falls back to SSL on port 465 and verifies again.
    - Uses generous `connectionTimeout`, `greetingTimeout`, and `socketTimeout` values.
  - `generateContactFormEmail(data)`
    - Builds a styled HTML email body from the contact data (`name`, `email`, `company`, `phone`, `subject`, `message`).

---

### Dependencies/Packages Used (Backend)
- `express`: HTTP server and routing
- `cors`: Cross-origin support
- `dotenv`: Environment variable loading
- `nodemailer`: SMTP email sending
- `@supabase/supabase-js`: Present but not used in current code

Source: `backend/package-backend.json`

---

### Configurations (Environment Variables)
- `EMAIL_USER`: SMTP username (sender account)
- `EMAIL_PASS`: SMTP password
- `EMAIL_TO`: Default recipient for contact submissions
- `SMTP_HOST` (optional): Defaults to `smtpout.secureserver.net`
- `SMTP_PORT` (optional): Defaults to `587`; fallback to `465` if verification fails
- `PORT`: Express server port (default `3001` per docs)

Source example: `backend/README.md`

---

### Request/Response Contract for Email Endpoint
- **Request body** (supports either raw `html` or template + data):

```json
{
  "from": "sender@example.com",
  "to": "recipient@example.com",            // optional; defaults to EMAIL_TO
  "subject": "Email Subject",
  "html": "<p>Email content</p>",           // optional when using template
  "template": "contact-form",               // optional
  "data": {                                  // required if template is used
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Company Name",
    "phone": "123-456-7890",
    "subject": "Contact Subject",
    "message": "Message content",
    "ip": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "timestamp": "2023-01-01T00:00:00.000Z"
  }
}
```

- **Success response**:

```json
{
  "success": true,
  "messageId": "<email-message-id>",
  "message": "Email sent successfully"
}
```

- **Error response**:

```json
{
  "success": false,
  "error": "Failed to send email",
  "details": "<error message>"
}
```

---

### Security Review
- **Input validation**: Minimal (only checks `from` and `subject`). No schema validation of `data`/`html`.
- **Sanitization**: None applied to `data` fields. The message is interpolated directly into HTML.
- **Authentication/authorization**: None (public endpoint). No rate limiting or CAPTCHA.
- **Secrets management**: Via environment variables (good). Ensure `.env` is not committed.
- **TLS config**: `tls.rejectUnauthorized: false` is configured; not recommended for production.
- **Logging**: Logs raw `req.body` (may include PII); consider redaction or reduced logging in production.

---

### Issues / Missing Parts
- Contact CRUD is not implemented despite DB mentions in root `README.md`.
- No input schema validation (e.g., email format, max lengths, required fields for template mode).
- No sanitization/escaping before injecting user content into HTML.
- No abuse protection (no rate limits, CAPTCHA, or IP throttling).
- `tls.rejectUnauthorized: false` weakens transport security.
- Accepting client-provided `to` enables potential misuse; ideally lock to `EMAIL_TO`.
- `@supabase/supabase-js` is unused in the active server code.

---

### Suggested Improvements
- **Validation**: Introduce a schema validator (e.g., Zod/Joi) for `from` (email), `subject`/`message` lengths, and template/data structure.
- **Sanitization**: Escape or convert user text to safe HTML; treat `message` as text with preserved line breaks.
- **Security**:
  - Remove `tls.rejectUnauthorized: false` in production.
  - Add rate limiting (`express-rate-limit`) and CAPTCHA (reCAPTCHA/hCaptcha) verification.
  - Ignore client-provided `to` in public APIs; always use `EMAIL_TO`.
  - Redact logs in production.
- **Reliability**: Use exponential backoff, consider a queue (e.g., Bull/Redis) for email jobs.
- **Observability**: Structured logs and correlation IDs.
- **Documentation**: Clarify accepted payloads and security behavior (e.g., `to` ignored in prod).
- **Cleanups**: Remove `@supabase/supabase-js` if not used, or implement DB storage and use it.

---

### Reusable Helpers (Current)
- `initializeTransporter()` – sets up Nodemailer with 587→465 fallback and verification.
- `generateContactFormEmail(data)` – builds a styled HTML message from contact data.

---

### Implementing the Same Functionality on Another Website

#### Minimal Email-Only Flow (no DB)
1. Set up an Express server with CORS and JSON/body parsing.
2. Configure Nodemailer with your SMTP credentials (`EMAIL_USER`, `EMAIL_PASS`, `SMTP_HOST`, `SMTP_PORT`).
3. Create `POST /api/send-email`:
   - Validate request via schema.
   - Optionally generate HTML from a template helper.
   - Send via Nodemailer with retry/backoff.
   - Return JSON with `success`, `messageId` or error details.
4. Security: rate limits, CAPTCHA, production TLS verification, use fixed `EMAIL_TO`.

#### With Contact CRUD and DB
1. Add DB integration (Supabase or Prisma+Postgres).
2. Define `contacts` table: `id`, `name`, `email`, `phone`, `company`, `subject`, `message`, `created_at`, plus metadata (`ip`, `userAgent`).
3. Routes:
   - `POST /api/contacts` – validate, store record, then send or enqueue email.
   - `GET /api/contacts` – admin-only list.
   - `GET /api/contacts/:id` – admin-only detail.
   - `PATCH /api/contacts/:id` – admin-only updates (e.g., status/notes).
   - `DELETE /api/contacts/:id` – admin-only deletion.
4. Security: authentication/authorization, RLS if using Supabase, full validation.
5. Observability: centralized error handling and structured logs.

---

### Quick Pointers to Source
- Transporter initialization, endpoint, and template are in `backend/server.js`.
- Environment variables and API payload examples are in `backend/README.md`.
- Dependencies are listed in `backend/package-backend.json`.


