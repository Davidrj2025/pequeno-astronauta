'use client';
import { useState } from 'react';

export default function Teste() {
  const [apiKey, setApiKey] = useState('');
  const [prompt, setPrompt] = useState('Mantenha o rosto desta pessoa exatamente igual. Vista ela com o uniforme amarelo da seleção brasileira de futebol. Adicione pintura verde e amarela no rosto. Pose de jogador profissional. Fundo verde escuro. Foto realista.');
  const [photoBase64, setPhotoBase64] = useState('');
  const [photoMime, setPhotoMime] = useState('image/jpeg');
  const [preview, setPreview] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoMime(file.type || 'image/jpeg');
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setPreview(dataUrl);
      setPhotoBase64(dataUrl.split(',')[1]);
    };
    reader.readAsDataURL(file);
  }

  async function gerar() {
    if (!apiKey) return setError('Cole sua API Key.');
    if (!photoBase64) return setError('Selecione uma foto.');
    setError('');
    setResult('');
    setLoading(true);
    try {
      const res = await fetch('/api/gerar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey, photoBase64, photoMime, prompt })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult('data:image/png;base64,' + data.imageData);
    } catch (err: any) {
      setError(err.message || 'Erro desconhecido.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ background: '#FFD700', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: '#fff', borderRadius: 20, padding: 32, width: '100%', maxWidth: 480, boxShadow: '0 8px 32px rgba(0,0,0,0.13)' }}>
        <h1 style={{ color: '#1a237e', textAlign: 'center', marginBottom: 20, fontSize: 22, textTransform: 'uppercase' }}>⚽ Teste Figurinha IA</h1>

        <label style={{ fontWeight: 700, color: '#1a237e', fontSize: 12, textTransform: 'uppercase' }}>API Key</label>
        <input type="password" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="AIza..." style={{ width: '100%', border: '2px solid #e0e0e0', borderRadius: 10, padding: '12px 14px', fontSize: 14, marginBottom: 16, marginTop: 6, display: 'block' }} />

        <label style={{ fontWeight: 700, color: '#1a237e', fontSize: 12, textTransform: 'uppercase' }}>📸 Foto</label>
        <input type="file" accept="image/*" onChange={handlePhoto} style={{ marginBottom: 12, marginTop: 6, display: 'block' }} />
        {preview && <img src={preview} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '3px solid #1a237e', display: 'block', margin: '0 auto 16px' }} />}

        <label style={{ fontWeight: 700, color: '#1a237e', fontSize: 12, textTransform: 'uppercase' }}>✏️ Prompt</label>
        <textarea value={prompt} onChange={e => setPrompt(e.target.value)} rows={4} style={{ width: '100%', border: '2px solid #e0e0e0', borderRadius: 10, padding: '12px 14px', fontSize: 13, marginBottom: 16, marginTop: 6, display: 'block', fontFamily: 'inherit' }} />

        <button onClick={gerar} disabled={loading} style={{ width: '100%', background: loading ? '#aaa' : '#1a237e', color: '#fff', border: 'none', borderRadius: 12, padding: 16, fontSize: 16, fontWeight: 800, textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Gerando...' : '⚡ Gerar Imagem'}
        </button>

        {error && <p style={{ color: 'red', marginTop: 12, fontSize: 13 }}>⚠️ {error}</p>}

        {result && (
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <p style={{ color: '#1a237e', fontWeight: 800, marginBottom: 12 }}>✅ IMAGEM GERADA!</p>
            <img src={result} style={{ width: '100%', borderRadius: 14 }} />
            <a href={result} download="figurinha.png" style={{ display: 'inline-block', marginTop: 14, background: '#FFD700', color: '#1a237e', fontWeight: 800, borderRadius: 10, padding: '12px 28px', textDecoration: 'none' }}>⬇️ Baixar</a>
          </div>
        )}
      </div>
    </div>
  );
}
