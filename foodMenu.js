const base_path_url = "./data/foodMenu.json";
async function getMenu(path) {
  try {
    const resposne = await fetch(path);
    const data = await resposne.json();
    const menuItems = Object.entries(data);
  } catch (error) {
    console.log("Opps erro from Resource", error.message);
  }
}

// call get menu and parse the url
getMenu(base_path_url);
