const useData = async (url, sections) => {
  const response = await fetch(url, { cache: "no-store" });

  const data = await response.json();
  const result = {};

  for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    const { key: sectionKey, ...sectionData } = data.sections.find(
      (i) => i.key === section
    );
    result[section] = sectionData;
  }
  return result;
};

export default useData;
