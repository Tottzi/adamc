export interface projectInterface {
  Name: string;
  Desc: string;
  weblink?: string;
  picture?: string;
  github: string;
  techs: string[];
  className: string;
  contentStyle?: any;
  contentArrowStyle?: any;
  iconStyle: any;
  icon: any;
}

export type iconstyle = {
  width: string;
  height: string;
  fill?: string;
  stroke?: string;
  cursor: string;
  margin: string;
  transition: string;
};

