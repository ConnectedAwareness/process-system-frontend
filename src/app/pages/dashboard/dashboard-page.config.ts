import { UserRole, UserCapability } from "@connectedawareness/process-system-interfaces";

export class OrganisationField {
  constructor(
    public organisationName: string,
    public links: DashboardLink[]
  ) { }
}
export class DashboardLink {
  constructor(
    public title: string,
    public link: string,
    public img: string,
    public roles: UserRole[],
    public capabilities: UserCapability[],
    public description: string,
    public implemented: boolean
  ) { }
}


export const links: DashboardLink[] = [
  new DashboardLink(
    'Profilseite',
    'profile',
    '',
    [],
    [],
    'Auf dieser Seite können Sie Eigenschaften ihres Profils und ihrer Organisation einsehen und bearbeiten',
    true
  ), new DashboardLink(
    'Versionenseite',
    'versions',
    '',
    [],
    [],
    'Auf dieser Seite können sie alle Versionen des Prozessdokuments einsehen und bearbeiten.',
    true
  ), new DashboardLink(
    'Prozessdokument',
    '',
    '',
    [UserRole.Connectee],
    [],
    'Hier kannst du das Prozessdokument deiner Organisation ansehen und bearbeiten.',
    false
  ), new DashboardLink(
    'Prozesskoordinator einladen',
    '',
    '',
    [UserRole.Connector],
    [],
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    false
  ), new DashboardLink(
    'Connectees einladen',
    '',
    '',
    [UserRole.ProcessCoordinator],
    [],
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    false
  )
];