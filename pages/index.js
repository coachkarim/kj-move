export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">KJ Move</h1>
        <p className="text-lg max-w-xl mx-auto mb-2">
          I’m Karim Aljindi, a certified fitness coach based in Zurich, specialized in calisthenics and bodyweight training. Graduate of <strong>SAFS</strong> (Swiss Academy of Fitness and Sports). I help people move better, get stronger, and feel confident in their bodies.
        </p>
        <p className="text-md max-w-xl mx-auto italic text-gray-400">
          I’m also a blue belt in Brazilian Jiu-Jitsu, passionate about functional movement and mobility.
        </p>
        <hr className="my-8 border-gray-700" />
        <p className="text-lg max-w-xl mx-auto mb-2">
          Ich bin Karim Aljindi, ein zertifizierter Fitness-Trainer aus Zürich, spezialisiert auf Calisthenics und Körpergewichtstraining. Absolvent der <strong>SAFS</strong> (Swiss Academy of Fitness and Sports). Ich helfe Menschen, sich besser zu bewegen, stärker zu werden und sich in ihrem Körper sicher zu fühlen.
        </p>
        <p className="text-md max-w-xl mx-auto italic text-gray-400">
          Ich habe außerdem einen blauen Gürtel im Brazilian Jiu-Jitsu und bin leidenschaftlich an funktioneller Bewegung und Mobilität interessiert.
        </p>
      </section>

      <section className="bg-gray-900 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Services / Dienstleistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Personal Training / Persönliches Training</h3>
            <p>
              Available at any PureGym location in Zurich, or at your home if space is suitable. <br />
              Persönliches Training an jedem PureGym-Standort in Zürich oder bei dir zu Hause (wenn Platz vorhanden ist).
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Bodyweight Programs / Calisthenics-Programme</h3>
            <p>
              Customized calisthenics plans to build strength, control, and mobility. <br />
              Maßgeschneiderte Programme zur Förderung von Kraft, Kontrolle und Mobilität.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact / Kontakt</h2>
        <p className="mb-2">📞 WhatsApp: <a className="text-blue-500" href="https://wa.me/41787460071">078 746 00 71</a></p>
        <p>📸 Instagram: <a className="text-blue-500" href="https://instagram.com/karim_bjj_" target="_blank">@karim_bjj_</a></p>
      </section>
    </main>
  );
}
