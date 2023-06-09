class FileHandling {
  public static download(text: string): void {
    const data = new File([text], "articulated.json", {
      type: "application/json",
    });

    const url = URL.createObjectURL(data);

    const a = document.createElement("a");
    a.href = url;
    a.download = data.name;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }

  public static upload(callback: (text: string) => void): void {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.addEventListener("change", () => {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        callback(reader.result as string);
      };
      reader.readAsText(file);
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }
}

export default FileHandling;
