import { autoInsert } from "./markName.js";

export function insertHead(data) {
  return `${autoInsert[0].title}
${autoInsert[0].start}
<!DOCTYPE html>
${data + autoInsert[0].end}`;
}
