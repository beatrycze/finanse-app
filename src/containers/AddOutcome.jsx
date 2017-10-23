import React from 'react';
import { Link } from 'react-router-dom';
import Select from '../components/Select';
import '../styles/Forms.css';

class AddOutcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props.users.asList(),
            categories: props.categories.asList(),
            newOutcome: {
                id: '',
                categoryId: '',
                amount: '',
                createdAt: '',
                createdBy: '',
                description: ''
            },
        };
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="panel panel-default top-spacer">
                    <div className="panel-heading">
                        <h1>Dodaj wydatek</h1>
                    </div>
                    <div className="panel-body">
                        <form className="top-spacer">
                            <div className="form-group row hidden">
                                <label htmlFor="outcomeId" className="col-sm-2 col-lg-1 col-form-label">Id</label>
                                <div className="col-sm-3 col-md-2">
                                    <input type="text" className="form-control" id="outcomeId" placeholder="" value={this.state.newOutcome.id} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="amount" className="col-sm-2 col-lg-1 col-form-label">Kwota</label>
                                <div className="col-sm-3 col-md-2">
                                    <input type="text" className="form-control" id="amount" placeholder="Wpisz kwotę" value={this.state.newOutcome.amount} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <Select 
                                    label={"category"}
                                    name={"Kategoria"}
                                    value={this.state.newOutcome.categoryId}
                                    options={this.state.categories}
                                />
                            </div>
                            <div className="form-group row">
                                <Select 
                                    label={"createdBy"}
                                    name={"Utworzył(a)"}
                                    value={this.state.newOutcome.createdBy}
                                    options={this.state.users}
                                />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="date" className="col-sm-2 col-lg-1 col-form-label">Data</label>
                                <div className="col-sm-3 col-md-2">
                                    <input type="text" className="form-control" id="date" placeholder="Wpisz datę" value={this.state.newOutcome.createdAt} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="checkbox col-sm-3 col-sm-offset-2 col-lg-offset-1">
                                    <label>
                                    <input type="checkbox" /> Zapamiętaj datę
                                    </label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-lg-1 col-form-label">Opis</label>
                                <div className="col-sm-6 col-md-4">
                                    <input type="text" className="form-control" id="description" placeholder="Dodaj opis" value={this.state.newOutcome.description} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-1 col-sm-offset-2 col-lg-offset-1 top-spacer right-spacer">
                                    <button type="submit" className="btn btn-primary">Zapisz i dodaj</button>
                                </div>
                                <div className="col-sm-1 col-sm-offset-1 col-md-offset-0 col-lg-offset-0 top-spacer right-spacer">
                                    <button type="button" className="btn btn-info">Zapisz zmiany</button>
                                </div>
                                <div className="col-sm-1 col-sm-offset-1 col-md-offset-0 col-lg-offset-0 top-spacer">
                                    <Link to={'/outcomes'}><button type="button" className="btn btn-default">Wróć do listy wydatków</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddOutcome;
