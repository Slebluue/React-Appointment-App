// Dependencies
// -----------------------------------------------
import moment from 'moment'

const validation = {
  dateForm(data) {
    let errors = {}
    if ( !data.date || !data.date.isValid() ) {
      errors['date'] = "* Please choose a date from the calendar or enter in MM/DD/YYYY format"
    }
    if ( data.apptName.length === 0 ){
      errors['name'] = "* Appointment name is required"
    }

    if(errors.date || errors.name){
      return errors
    } else {
      return false
    }
    
  }
}
export default validation