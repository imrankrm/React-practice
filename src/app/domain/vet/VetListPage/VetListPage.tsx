import * as React from 'react';
// import { RouteComponentProps } from "react-router";
// import { graphql, QueryProps} from "react-apollo";
//
// type VetListPageOwnProps = RouteComponentProps<{}>;
// type VetListPageProps = VetListPageOwnProps & {
//     data: QueryProps;
// }

const VetListPage = () =>
    <section className="container">
        <div className="row m-5">
        <h2>Veterianarians</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Specialties</th>
                </tr>
            </thead>
            <tbody>
            <tr>
            {/*{*/}
                {/*vets.map(vet =>*/}
                {/*<tr key={vet.id}>*/}
                    <td>James Carter
                        {/*{vet.firstName}*/}
                        {/*{vet.lastName}*/}
                    </td>
                    <td>none
                        {/*{vet.spcialties.length > 0 ? vet.spcialties.map(specialty =>*/}
                        {/*specialty.name).join(", ") : "none"}*/}
                    </td>
                </tr>
            <tr>
            {/*{*/}
                {/*vets.map(vet =>*/}
                {/*<tr key={vet.id}>*/}
                    <td>Helen Leary
                        {/*{vet.firstName}*/}
                        {/*{vet.lastName}*/}
                    </td>
                    <td>radiology
                        {/*{vet.spcialties.length > 0 ? vet.spcialties.map(specialty =>*/}
                        {/*specialty.name).join(", ") : "none"}*/}
                    </td>
                </tr>
            <tr>
            {/*{*/}
                {/*vets.map(vet =>*/}
                {/*<tr key={vet.id}>*/}
                    <td>Linda Douglas
                        {/*{vet.firstName}*/}
                        {/*{vet.lastName}*/}
                    </td>
                    <td>dentistry, surgery

                        {/*{vet.spcialties.length > 0 ? vet.spcialties.map(specialty =>*/}
                        {/*specialty.name).join(", ") : "none"}*/}
                    </td>
                </tr>
            <tr>
            {/*{*/}
                {/*vets.map(vet =>*/}
                {/*<tr key={vet.id}>*/}
                    <td>Rafael Ortega
                        {/*{vet.firstName}*/}
                        {/*{vet.lastName}*/}
                    </td>
                    <td>surgery
                        {/*{vet.spcialties.length > 0 ? vet.spcialties.map(specialty =>*/}
                        {/*specialty.name).join(", ") : "none"}*/}
                    </td>
                </tr>
                {/*)}*/}
            </tbody>

        </table>
        </div>
    </section>

export default VetListPage;