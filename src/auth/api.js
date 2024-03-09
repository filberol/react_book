import { get, getDatabase, push, query, ref, remove, set } from "firebase/database"

export async function add(user, deed) {
  const oRef = await push(
    ref(
      getDatabase(), `users/${user.uid}/todos`
    )
  );
  await set(oRef, deed);
  const oSnapshot = await get(query(
      oRef
    )
  );
  const oDeed = oSnapshot.val();
  oDeed.key = oRef.key;
  return oDeed;
}

export async function getList(user) {
  const oSnapshot = await get(
    query(ref(
      getDatabase(), `users/${user.uid}/todos`
      ))
  );
  const oArr = [];
  let oDeed;
  oSnapshot.forEach((oDoc) => {
    oDeed = oDoc.val();
    oDeed.key = oDoc.key;
    oArr.push(oDeed);
  });
  return oArr;
}

export async function setDone(user, key) {
  return set(ref(
    getDatabase(), `users/${user.uid}/todos/${key}/done`
  ), true);
}

export async function del(user, key) {
  return remove(ref(
    getDatabase(), `users/${user.uid}/todos/${key}`
  ));
}