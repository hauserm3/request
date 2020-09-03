import fs from "fs";

export class Writer implements FileConfig {
  filepath: string;
  filename: string;

  constructor(fileConfig: FileConfig) {
    this.filepath = fileConfig.filepath;
    this.filename = fileConfig.filename;
  }

  writeToFile(data: any): void {
    fs.writeFile(`${this.filepath}${this.filename}`, data, (err) => {
      if (err) return console.log(err);
      console.log(`Data written to > ${this.filepath}${this.filename}`);
    });
  }

}
