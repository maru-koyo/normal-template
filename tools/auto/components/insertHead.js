import { autoInsert } from "./markName.js";

export function insertHead(data) {
  return `<!doctype html>
  ${data + autoInsert[0].devide}`;
}
