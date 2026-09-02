export default function handler(req, res) {
  res.redirect(
    302,
    "https://appsheet-vrp-test.vercel.app/api/redirect-target"
  );
}
