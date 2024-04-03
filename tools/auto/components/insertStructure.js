import { autoInsert } from "./markName.js";

export function insertStructure(data) {
  return `
${autoInsert[1].title}
${autoInsert[1].start}
<script type="application/ld+json">
${JSON.stringify(data)}
</script>
</body>
</html>
${autoInsert[1].end}`;
}
