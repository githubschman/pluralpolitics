import { getDatabase, ref, onValue, set } from "firebase/database";
import './firebase';
// import { getAuth } from "firebase/auth";

// move to utils
const convertDateToUTC = (date) => new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())
const dbutils = {
    saveResults: (version, diversity, expansiveness, quadrantMetrics, allAnswers) => {
      const db = getDatabase();
      // The timezone is always zero UTC offset, as denoted by the suffix "Z".
      const date = new Date(convertDateToUTC(new Date())).toISOString().replace('.', 'tmz')
      const data = {
        version,
        diversity,
        expansiveness,
        quadrantMetrics,
        allAnswers,
      }

      const resultsRef = ref(db, `results/${date}`)
      set(resultsRef, data)
    },
    getTestData: (cb) => {
        const db = getDatabase();
        // if const auth = getAuth();
        // // const userId = auth.currentUser.uid;
        // console.log(auth)
        onValue(ref(db, 'questions'), (snapshot) => cb(snapshot.val()), {
          onlyOnce: true
        });
    },
    getLastUpdated: (cb) => {
      const db = getDatabase();
      // if const auth = getAuth();
      // // const userId = auth.currentUser.uid;
      // console.log(auth)
      onValue(ref(db, 'last-updated'), (snapshot) => cb(snapshot.val()), {
        onlyOnce: true
      });
    },
    getTestVersion: (cb) => {
      const db = getDatabase();
      // if const auth = getAuth();
      // // const userId = auth.currentUser.uid;
      // console.log(auth)
      onValue(ref(db, 'version'), (snapshot) => cb(snapshot.val()), {
        onlyOnce: true
      });
    },
    updateTestVersion: (data) => {
      const db = getDatabase();

      set(ref(db, 'version'), data);
      set(ref(db, 'last-updated'), new Date().toDateString());
    },
    
    updateTestData: (data, cb) => {
        const db = getDatabase();

        set(ref(db, 'questions'), data);
        set(ref(db, 'last-updated'), new Date().toDateString());
        cb();
    }
}

export default dbutils