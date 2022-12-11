const Contact = () => {
    return(
        <div class="container-sm">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Student ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Raiyan Khalil</td>
                    <td>Shuvo</td>
                    <td>300358160</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jeongin</td>
                    <td>woo</td>
                    <td>300345253</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Shivam</td>
                    <td>Harjai</td>
                    <td>300351823</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Yash</td>
                    <td>Thakkar</td>
                    <td>300337656</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Contact;