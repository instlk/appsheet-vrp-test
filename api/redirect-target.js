export default function handler(req, res) {
  console.log("REDIRECT TARGET HIT", {
    method: req.method,
    headers: req.headers
  });

  res.status(200).setHeader("Content-Type", "text/plain");
  res.send("redirect-target-reached");
}
