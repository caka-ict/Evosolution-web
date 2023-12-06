export const CONFIG_EMAILJS = {
  service_id: process.env.REACT_APP_SERVICE_ID,
  tempalate_id: process.env.REACT_APP_TEMPLATE_ID,
  public_key: process.env.REACT_APP_PUBLIC_KEY,
};

export function getSerivceId() {
  return process.env.REACT_APP_SERVICE_ID;
}
