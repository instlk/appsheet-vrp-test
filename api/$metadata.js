export default function handler(req, res) {
  res.redirect(
    302,
    "https://appsheet-vrp-target.vercel.app/api/target"
  );
}
