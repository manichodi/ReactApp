
function ListEmployee()  {
    const empData = [
        {
            "id": 7,
            "FirstName": "Chodi",
            "LastName": "Manikanta",
            "Email":"chodimani28@gmail.com"
        },
        {
            "id": 6,
            "FirstName": "Yenni",
            "LastName": "saikiran",
            "Email": "yennisaikiran@gmail.com"
        },
        { 
            "id": 7,
            "FirstName": "Mulla",
            "LastName": "Ganesh",
            "Email": "ganesh@gmail.com"
        }
    ]
    return (
        <div className='container'>
            <h2>List of Emp</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        empData.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.id }</td>
                                <td>{emp.FirstName }</td>
                                <td>{emp.LastName }</td>
                                <td>{emp.Email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
     
}
export default ListEmployee

