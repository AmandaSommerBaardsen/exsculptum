export default function ExsculptumLandingPage() {
  return (
    <div className="min-h-screen bg-[#F6F2EC] text-[#2A2725] font-serif">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm mb-6 text-[#8B7E72]">
            Fascia Release & Lymphatic Sculpting
          </p>

          <h1 className="text-6xl md:text-8xl leading-none tracking-wide mb-8 font-light">
            EXSCULPTUM
          </h1>

          <p className="text-2xl md:text-3xl italic mb-10 text-[#5A524B]">
            Form revealed through release.
          </p>

          <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#3A3531]">
            <p>
              Exsculptum combines fascia release and lymphatic sculpting through
              the face, jaw, neck and torso.
            </p>

            <p>
              The work is centered around tension patterns, fluid flow and the
              body’s internal structure — supporting softness, definition and a
              greater sense of ease within the body.
            </p>

            <p>
              Each treatment includes personalized follow-up and custom video
              guidance designed around the client’s individual needs.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:hello@exsculptum.no?subject=Exsculptum%20Booking%20Inquiry"
              className="px-8 py-4 bg-[#2A2725] text-[#F6F2EC] rounded-full text-sm tracking-wide uppercase hover:opacity-90 transition inline-block"
            >
              Book a treatment
            </a>

            <button className="px-8 py-4 border border-[#2A2725] rounded-full text-sm tracking-wide uppercase hover:bg-[#ECE4DA] transition">
              hello@exsculptum.no
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT FASCIA */}
      <section className="px-8 md:px-20 py-28 border-t border-[#DDD3C8]">
        <div className="max-w-5xl grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm mb-4 text-[#8B7E72]">
              What is fascia?
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight mb-8 font-light">
              The body’s internal architecture.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#3A3531]">
            <p>
              Fascia is the connective tissue surrounding and supporting muscles,
              organs and structures throughout the body.
            </p>

            <p>
              Restriction, tension and stagnation within fascia can influence
              posture, fluid flow and visible holding patterns through the face
              and torso.
            </p>

            <p>
              Through intentional release work and lymphatic stimulation,
              Exsculptum supports softness, circulation and structural flow.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="px-8 md:px-20 py-28 bg-[#EFE7DC]">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-sm mb-6 text-[#8B7E72] text-center">
            Treatments
          </p>

          <h2 className="text-4xl md:text-5xl text-center mb-20 font-light">
            Personalized sculpting & release.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Face Sculpt",
                text:
                  "Focused fascia release and lymphatic sculpting through the face to support contour, softness and fluid flow.",
              },
              {
                title: "Jaw & Neck Release",
                text:
                  "Work through the jaw, neck and shoulders supporting tension release, drainage pathways and posture.",
              },
              {
                title: "Torso Sculpt",
                text:
                  "A torso-focused treatment supporting structural release, circulation and visible softness through the midsection.",
              },
              {
                title: "Personal Video Guidance",
                text:
                  "Clients receive individualized follow-up videos designed around their own tension patterns and continuation between sessions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#F6F2EC] p-10 rounded-[2rem] shadow-sm"
              >
                <h3 className="text-3xl mb-6 font-light">{item.title}</h3>
                <p className="text-lg leading-8 text-[#3A3531]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 md:px-20 py-28 border-t border-[#DDD3C8]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm mb-6 text-[#8B7E72]">
            The Exsculptum Approach
          </p>

          <h2 className="text-4xl md:text-5xl leading-tight mb-12 font-light">
            Observation. Release. Continuation.
          </h2>

          <div className="space-y-8 text-lg leading-8 text-[#3A3531]">
            <p>
              Each treatment is approached individually with attention to
              restriction patterns, tension and fluid stagnation throughout the
              body.
            </p>

            <p>
              Exsculptum is built around continuity — observing the body’s
              transformation over time through both hands-on treatment and
              personalized support between sessions.
            </p>

            <p>
              The goal is not aggressive change, but gradual release, softness,
              structure and flow.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-20 py-16 bg-[#2A2725] text-[#F6F2EC]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-3xl mb-4 tracking-wide">EXSCULPTUM</h2>
            <p className="text-[#D6CDC2]">
              Fascia Release & Lymphatic Sculpting
            </p>
          </div>

          <div className="space-y-2 text-[#D6CDC2]">
            <p>hello@exsculptum.no</p>
            <p>@exsculptum</p>
            <p>Launching soon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
