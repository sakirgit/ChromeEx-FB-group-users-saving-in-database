
document.addEventListener("DOMContentLoaded", function () {
 // const apiKeyInput = document.getElementById("api-key-input");
  const languageSelect = document.getElementById("translation-language");
  const saveButton = document.getElementById("save-button");

  // Load saved values
  chrome.storage.local.get(["translationLanguage"], (result) => {
  //  apiKeyInput.value = result.openaiApiKey || "";
    console.log("result:: ", result);
    languageSelect.value = result.translationLanguage || "Inactive";
  });

  // Save API key and translation language
  saveButton.addEventListener("click", function () {
  //  const apiKey = apiKeyInput.value;
    const language = languageSelect.value;
  //  chrome.storage.local.set({ openaiApiKey: apiKey, translationLanguage: language });
    chrome.storage.local.set({ translationLanguage: language });
  });
});
Youtube Youtube height, 