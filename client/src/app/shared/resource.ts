export class Resource {
  constructor (
    public id: number,
    public title: string,
    public description: string,
    public link: string,
    public userId: string
  ) {}

  getShortDescription(): string {
    if (!this.description) {
      return this.description;
    }

    const cut = this.description.indexOf(' ', 100);

    if (cut === -1) {
      return this.description;
    }

    return this.description.substring(0, cut);
  }
}
