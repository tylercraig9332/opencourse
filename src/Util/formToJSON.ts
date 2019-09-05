export default function formToJSON(form : Object) : any {
    return [].reduce.call(form, (data : any , element : any) => {
    if (element.name.length > 0)
        data[element.name] = element.value;
    return data;
  }, {});
}