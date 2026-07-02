/**
 * FloatingVerificationIcons
 * ---------------------------
 * Replaces the "orbit behind the card" approach. These four icons are
 * scattered across the ENTIRE hero section (not just behind the dashboard)
 * and each drifts along its own multi-point path — up/down, left/right,
 * diagonal — so the motion reads as organic rather than a single circle.
 *
 * Usage: drop this as a sibling of your background blobs, BEFORE the
 * `container-x` content div, so it sits behind the headline/dashboard
 * the same way your blob divs already do (no z-index juggling needed):
 *
 *   <div className="absolute inset-0 bg-grid opacity-50" />
 *   <div className="absolute inset-0"><Particles density={55} /></div>
 *   <div className="absolute -top-20 -left-20 ... animate-blob" />
 *   <div className="absolute top-40 -right-20 ... animate-blob" />
 *   <FloatingVerificationIcons />                {/* <-- add here *\/}
 *   <div className="relative container-x ...">   {/* your existing content *\/}
 */

export default function FloatingVerificationIcons() {
  const icons = [
    {
      Icon: Briefcase,
      color: '#0052CC',
      bg: 'from-[#EAF2FF] to-white',
      ring: 'ring-[#0052CC]/10',
      pos: 'top-[12%] left-[6%]',
      anim: 'vc-path-1',
      duration: '13s',
      delay: '0s',
    },
    {
      Icon: GraduationCap,
      color: '#F97316',
      bg: 'from-orange-50 to-white',
      ring: 'ring-orange-100',
      pos: 'top-[18%] right-[8%]',
      anim: 'vc-path-2',
      duration: '15s',
      delay: '-3s',
    },
    {
      Icon: Fingerprint,
      color: '#0052CC',
      bg: 'from-[#EAF2FF] to-white',
      ring: 'ring-[#0052CC]/10',
      pos: 'bottom-[22%] left-[10%]',
      anim: 'vc-path-3',
      duration: '14s',
      delay: '-6s',
    },
    {
      Icon: MapPin,
      color: '#F97316',
      bg: 'from-orange-50 to-white',
      ring: 'ring-orange-100',
      pos: 'bottom-[14%] right-[12%]',
      anim: 'vc-path-4',
      duration: '16s',
      delay: '-9s',
    },
  ];

  return (
    <div className="hidden sm:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        /* Each path visits several waypoints so the movement isn't a
           straight back-and-forth or a single circle — it wanders. */
        @keyframes vc-path-1 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          25%  { transform: translate(40px, 30px) rotate(8deg); }
          50%  { transform: translate(10px, 70px) rotate(-6deg); }
          75%  { transform: translate(-30px, 25px) rotate(4deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes vc-path-2 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          30%  { transform: translate(-45px, 40px) rotate(-10deg); }
          55%  { transform: translate(-15px, 90px) rotate(6deg); }
          80%  { transform: translate(25px, 35px) rotate(-4deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes vc-path-3 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          20%  { transform: translate(30px, -35px) rotate(6deg); }
          50%  { transform: translate(65px, -10px) rotate(-8deg); }
          75%  { transform: translate(20px, 20px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes vc-path-4 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          25%  { transform: translate(-35px, -30px) rotate(-7deg); }
          50%  { transform: translate(-70px, 5px) rotate(9deg); }
          75%  { transform: translate(-25px, 35px) rotate(-3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>

      {icons.map(({ Icon, color, bg, ring, pos, anim, duration, delay }, i) => (
        <div
          key={i}
          className={`absolute ${pos}`}
          style={{ animation: `${anim} ${duration} ease-in-out infinite`, animationDelay: delay }}
        >
          <div
            className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br ${bg} shadow-lg ring-1 ${ring}`}
            style={{ color }}
          >
            <Icon className="h-4 w-4 md:h-5 md:w-5" />
          </div>
        </div>
      ))}
    </div>
  );
}