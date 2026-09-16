export interface Track {
  id: string;
  posterSlug: string;
  num: string;
  name: string;
  title: string;
  kicker: string;
  description: string;
  isCommon?: boolean;
  commonLabel?: string;
  registrationEnabled: boolean;
  registrationLink: string;
}

export const tracksData: Track[] = [
  {
    id: "track-1",
    posterSlug: "track-1",
    num: "01",
    name: "TRACK 1",
    title: "TRACK 1",
    kicker: "TRACK 01",
    description: "Specialized technical track focusing on advanced software architecture, systems engineering, and scalable technical implementation.",
    registrationEnabled: true,
    registrationLink: "/register?track=track-1"
  },
  {
    id: "track-2",
    posterSlug: "track-2",
    num: "02",
    name: "TRACK 2",
    title: "TRACK 2",
    kicker: "TRACK 02",
    description: "Specialized technical track focusing on emerging tech stacks, applied problem-solving, and building production-grade solutions.",
    registrationEnabled: true,
    registrationLink: "/register?track=track-2"
  },
  {
    id: "talk-session",
    posterSlug: "talk-session",
    num: "03",
    name: "TALK SESSION",
    title: "TALK SESSION",
    kicker: "COMMON SESSION",
    isCommon: true,
    commonLabel: "Common for Track 1 & Track 2",
    description: "Insightful keynote and interactive technical presentations featuring industry leaders on emerging technologies, engineering roadmaps, and career growth.",
    registrationEnabled: false,
    registrationLink: ""
  },
  {
    id: "nano-mentoring",
    posterSlug: "nano-mentoring",
    num: "04",
    name: "NANO MENTORING",
    title: "NANO MENTORING",
    kicker: "COMMON SESSION",
    isCommon: true,
    commonLabel: "Common for Track 1 & Track 2",
    description: "Personalized 1-on-1 and small-group mentoring pods with seasoned tech professionals for technical guidance, portfolio review, and career navigation.",
    registrationEnabled: false,
    registrationLink: ""
  }
];
