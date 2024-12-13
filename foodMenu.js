const base_path_url = "./data/foodMenu.json";
async function getMenu(path) {
  try {
    const resposne = await fetch(path);
    const data = await resposne.json();
  } catch (error) {}
}
