import { autoInsert } from "./markName.js";

export function insertStructure(data) {
  return `
${autoInsert[1].devide + autoInsert[1].title}
${JSON.stringify(data)}
</script>
</body>
</html>`;
}
