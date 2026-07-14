// ============================================================
// FIREBASE CONFIG — replace with YOUR project's values.
// Find these in the Firebase Console:
// Project Settings (gear icon) > General > Your apps > Web app > SDK setup and config
//
// These values are safe to be public — they identify your project,
// they are not secret keys. Security is enforced by Firestore rules
// (see README.md), not by hiding this file.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ⚠️ PLACEHOLDER VALUES — this must be its OWN Firebase project, separate
// from Yilian's and Yaribith's other clients. Create a new project at console.firebase.google.com
// (e.g. "yaribith-nails"), enable Firestore + Authentication (Email/
// Password), then paste that project's config values in below.
const firebaseConfig = {
  apiKey: "REPLACE_WITH_YARIBITH_PROJECT_API_KEY",
  authDomain: "yaribith-nails.firebaseapp.com",
  projectId: "yaribith-nails",
  storageBucket: "yaribith-nails.firebasestorage.app",
  messagingSenderId: "REPLACE_WITH_SENDER_ID",
  appId: "REPLACE_WITH_APP_ID",
  measurementId: "REPLACE_WITH_MEASUREMENT_ID"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// Note: no Firebase Storage here — image uploads (gallery + booking inspo
// photos) go through Cloudinary instead, see cloudinary-config.js. This
// avoids requiring Yaribith/you to be on Firebase's paid Blaze plan.

// ------------------------------------------------------------
// Business hours / services / gallery are editable from the admin panel
// (Settings, Services, and Gallery tabs) and live in Firestore, so Yaribith
// never has to touch this file to make everyday changes.
//
// These constants are only used as a ONE-TIME fallback: the first time the
// site loads and no `settings/business` document exists yet in Firestore,
// the admin Settings tab pre-fills its form with these values. After she
// saves once, Firestore takes over and this file is no longer read for
// business hours.
// ------------------------------------------------------------
export const DEFAULT_BUSINESS_HOURS = {
  // 0 = Sunday, 1 = Monday, ... 6 = Saturday. Closed days are simply omitted.
  1: { start: "10:00", end: "18:00" }, // Monday
  2: { start: "10:00", end: "18:00" }, // Tuesday
  3: { start: "10:00", end: "18:00" }, // Wednesday
  4: { start: "10:00", end: "18:00" }, // Thursday
  5: { start: "10:00", end: "19:00" }, // Friday
  6: { start: "09:00", end: "17:00" }, // Saturday
};
export const DEFAULT_SLOT_LENGTH_MINUTES = 60;
