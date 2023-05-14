const useData = async (url) => {
  const response = await fetch(url, { cache: "no-store" });

  const data = await response.json();
  const result = {};

  for (let i = 0; i < data.sections.length; i++) {
    const section = data.sections[i];
    const { key, ...sectionData } = section;
    result[key] = sectionData;
  }
  return result;
};

export default useData;
