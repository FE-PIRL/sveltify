import * as Docs from 'sveltify-api';

export function get(req, res) {
  const { slug } = req.params;
  const output = Docs[slug];
  if (output) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(output));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: 'Not found',
      }),
    );
  }
}
