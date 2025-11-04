import React from 'react'
 import { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Alert, Grid, Paper } from "@mui/material";

/**
 * EnquiryForm.jsx (Material UI version)
 * Usage:
 *   import EnquiryForm from './EnquiryForm';
 *   <EnquiryForm submitUrl="/api/enquiry" />
 */
export default function Contact({ submitUrl = "http://localhost:5000/api/enquiries", onSuccess }) {
      
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    if (!form.consent) e.consent = "Please agree to be contacted.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(await res.text() || res.statusText);

      const data = await res.json();
      setStatus({ type: "success", msg: "Your enquiry has been sent successfully!" });
      setForm({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
      setErrors({});
      if (onSuccess) onSuccess(data);
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", p: 4,mt:4, mb:4 }}>
      <Typography variant="h5" gutterBottom>
        Send an Enquiry
      </Typography>

      {status && (
        <Alert severity={status.type} sx={{ mb: 2 }}>
          {status.msg}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item  sx={{ width: '87%' }}>
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              error={!!errors.message}
              helperText={errors.message}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="consent" checked={form.consent} onChange={handleChange} />}
              label="I agree to be contacted regarding my enquiry."
            />
            {errors.consent && (
              <Typography variant="body2" color="error">
                {errors.consent}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sx={{ mt: 1 }}>
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? "Sending..." : "Send Enquiry"}
            </Button>
            <Button
              type="button"
              variant="outlined"
              sx={{ ml: 2 }}
              onClick={() => {
                setForm({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
                setErrors({});
                setStatus(null);
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>

        <Typography variant="caption" color="text.secondary" display="block" mt={2}>
          We respect your privacy — your details will only be used to respond to this enquiry.
        </Typography>
      </Box>
    </Paper>
  );
}
