module.exports = {
    getRandomName: function() {
      let randomNumber = Math.floor(Math.random() * 100 + 1);
      return `name${new Date().getTime().toString()}${randomNumber}`;
  },

    getRandomId: function() {
      let randomNumber = Math.floor(Math.random() * 1000 + 1);
      return `ID_${new Date().getTime().toString()}${randomNumber}`;
  },

    getRandomPhoneNumber: function() {
      return Math.random().toString().slice(2, 12);
  },
    getRandomEmail: function() {
        return `${new Date().getTime().toString()}$('@email.com'}`;
    }
};
