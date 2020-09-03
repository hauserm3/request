import fs from "fs";

export class Writer implements FileConfig {
  directory: string;
  filename: string;

  constructor(fileConfig: FileConfig) {
    this.directory = fileConfig.directory;
    this.filename = fileConfig.filename;
  }

  writeToFile(data: any): void {
    fs.writeFile(`${this.directory}${this.filename}`, data, (err) => {
      if (err) return console.log(err);
      console.log(`Data written to > ${this.directory}${this.filename}`);
    });
  }

}
