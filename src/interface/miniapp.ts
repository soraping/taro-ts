export interface IMiniAppSetting {
  "scope.userInfo": boolean;
  "scope.userLocation": boolean;
}

export interface IMiniLogin {
  openId: string;
  mobile: string;
  token: string;
}

export interface IMarker {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  iconPath: string;
}
