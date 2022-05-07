export default {
  meta: {
    home: {
      title: 'DWH - LGBT+ association Delft',
      description:
        'DWH is the independent LGBT+ association of Delft and surroundings.' +
        " We're two things, a meeting place for LGBT+ people and their" +
        ' friends and a group that actively pushes for greater LGBT+' +
        ' rights and acceptance.',
    },
  },
  forms: {
    label: {
      name: 'How should we call you?',
      firstname: 'First Name',
      lastname: 'Last Name',
      initials: 'Initials',
      email: 'Email address',
      language: 'Language',
      languages: {
        dutch: 'Dutch',
        english: 'English',
        no_preference: 'No preference',
      },
      remarks: 'Do you have any further questions?',
      date_of_birth: 'Date of birth',
      age: 'How old are you?',
      phone_number: 'Phone number',
      residence: 'City of residence',
      address: 'Address',
      postal_code: 'Postal Code',
      pronouns: 'Pronouns',
      barbuddy: 'Who would you like to meet?',
      membership_fee: 'Membership Fee (see below)',
      iban: 'IBAN number for payment by direct debit (no spaces)',
      message: 'Message',
    },
    placeholder: {
      name: 'Name',
      firstname: 'First name',
      lastname: 'Last name',
      initials: 'Initials (for example Q.B.)',
      email: 'Email address',
      remarks: 'Remarks or questions',
      date_of_birth: 'Date of birth',
      age: 'Your age',
      phone_number: 'Phone number',
      residence: 'City name',
      address: 'Address',
      postal_code: 'Postal code (for example 2611PV)',
      pronouns: 'e.g. she/her, he/him, they/them',
      iban: 'IBAN number',
      message: 'Your message',
    },
    buttons: {
      sign_up: 'Sign up',
      submit: 'Submit',
      loading: 'Loading',
    },
    success: {
      heading: 'The form has been submitted successfully',
    },
  },
}
