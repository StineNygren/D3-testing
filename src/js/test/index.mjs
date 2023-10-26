function doAllTests() {
  try {
  } catch (e) {
    console.log(e);
    throw new Error("At least one test failed");
  }
}

doAllTests();
