import React from 'react';
import Select from './Select';
import '../styles/AddOutcomeIncome.css';

const AddIncome = (props) => {
    const incomeCategoriesOptions = props.incomeCategories;
    const usersOptions = props.users;

    return(
        <div className="container-fluid">
            <div className="panel panel-default top-spacer">
                <div className="panel-heading">
                    <h1>Dodaj przychód</h1>
                </div>
                <div className="panel-body">
                    <form className="top-spacer">
                        <div className="form-group row hidden">
                            <label htmlFor="incomeId" className="col-sm-2 col-lg-1 col-form-label">Id</label>
                            <div className="col-sm-3 col-md-2">
                                <input type="text" className="form-control" id="incomeId" placeholder="" value={props.id} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="amount" className="col-sm-2 col-lg-1 col-form-label">Kwota</label>
                            <div className="col-sm-3 col-md-2">
                                <input type="text" className="form-control" id="amount" placeholder="Wpisz kwotę" value={props.amount} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <Select 
                                label={"category"}
                                name={"Kategoria"}
                                value={props.newIncome.categoryId}
                                options={incomeCategoriesOptions}
                            />
                        </div>
                        <div className="form-group row">
                            <Select 
                                label={"createdBy"}
                                name={"Utworzył(a)"}
                                value={props.newIncome.createdBy}
                                options={usersOptions}
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="date" className="col-sm-2 col-lg-1 col-form-label">Data</label>
                            <div className="col-sm-3 col-md-2">
                                <input type="text" className="form-control" id="date" placeholder="Wpisz datę" value={props.createdAt}/>
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
                                <input type="text" className="form-control" id="description" placeholder="Dodaj opis" value={props.description}/>
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
                                <button type="button" className="btn btn-default">Wróć do listy przychodów</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddIncome;
