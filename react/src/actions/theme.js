export const getTheme = () => {
  fetch("/api/get_settings", {
    method: "GET"
  })
    .then(res => res.json())
    .then(res => {
      return {
        type: "UPDATE_THEME",
        data: {
          primary: res[0],
          secondary: res[1],
          tertiary: res[2],
          logo: res[3],
          about_us: res[4]
        }
      };
    });
};

export const updateTheme = (primary, secondary, tertiary, about_us) => {
  fetch(`/api/update_settings/${primary};${secondary};${tertiary};${about_us}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(res => {
      return {
        type: "UPDATE_THEME",
        data: {
          primary: res[0],
          secondary: res[1],
          tertiary: res[2],
          logo: res[3],
          about_us: res[4]
        }
      };
    });
};
