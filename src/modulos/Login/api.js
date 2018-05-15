// Constants
import { API } from '../../routes/index.js';

// Utils
import { apiFetch } from '../../lib/utils/api';

class user {
  static getUser() {
    return apiFetch(API.LOGIN.LOGIN);
  }
}

export default user;
