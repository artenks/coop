import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export enum CheckPermissionResults {
  UNAVAILABLE,
  DENIED,
  GRANTED,
  BLOCKED,
  ERRO,
}

export enum RequestPermissionResults {
  DENIED,
  GRANTED,
}

function checkPermissionListGranted(list: string[]) {
  const grantedCount = list.filter(el => el === RESULTS.GRANTED);

  return grantedCount.length === list.length;
}

export async function checkCameraPermission(): Promise<CheckPermissionResults> {
  try {
    const cameraResult = await check(PERMISSIONS.ANDROID.CAMERA);
    const readResult = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    const writeResult = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);

    if (checkPermissionListGranted([cameraResult, readResult, writeResult])) {
      return CheckPermissionResults.GRANTED;
    }

    switch (cameraResult) {
      case RESULTS.UNAVAILABLE:
        return CheckPermissionResults.UNAVAILABLE;
      case RESULTS.DENIED:
        return CheckPermissionResults.DENIED;
      case RESULTS.BLOCKED:
        return CheckPermissionResults.BLOCKED;
      default:
    }
  } catch (error) {}

  return CheckPermissionResults.ERRO;
}

export async function requestCameraPermission(): Promise<
  RequestPermissionResults
> {
  try {
    const camera = await request(PERMISSIONS.ANDROID.CAMERA);
    const read = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    const write = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);

    console.log('camera', camera);
    console.log('read', read);
    console.log('write', write);
  } catch (err) {}

  return RequestPermissionResults.GRANTED;
}
