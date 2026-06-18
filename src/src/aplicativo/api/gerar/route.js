export async function POST(request) {
  const { apiKey, photoBase64, photoMime, prompt } = await request.json();

  if (!apiKey || !photoBase64 || !prompt) {
    return Response.json({ error: 'Dados incompletos' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { inline_data: { mime_type: photoMime || 'image/jpeg', data: photoBase64 } },
              { text: prompt }
            ]
          }],
          generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json({ error: data?.error?.message || 'Erro na API do Google' }, { status: response.status });
    }

    const parts = data?.candidates?.[0]?.content?.parts || [];
    let imageData = null;
    for (const part of parts) {
      if (part.inlineData?.mimeType?.startsWith('image/')) {
        imageData = part.inlineData.data;
        break;
      }
    }

    if (!imageData) {
      return Response.json({ error: 'IA não retornou imagem. Verifique se o billing está ativo.' }, { status: 500 });
    }

    return Response.json({ imageData });

  } catch (err) {
    return Response.json({ error: err.message || 'Erro interno' }, { status: 500 });
  }
}
