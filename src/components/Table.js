import React ,{useState} from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import LineGraph from './LineGraph'
import MaterialTable from 'material-table'

import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
  Add: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
};


// active: 9918
// activePerOneMillion: 254.32
// cases: 36710
// casesPerOneMillion: 941
// continent: "Asia"
// country: "Afghanistan"
// countryInfo: {_id: 4, iso2: "AF", iso3: "AFG", lat: 33, long: 65, …}
// critical: 31
// criticalPerOneMillion: 0.79
// deaths: 1283
// deathsPerOneMillion: 33
// oneCasePerPeople: 1062
// oneDeathPerPeople: 30396
// oneTestPerPeople: 437
// population: 38997440
// recovered: 25509
// recoveredPerOneMillion: 654.12
// tests: 89255
// testsPerOneMillion: 2289
// todayCases: 0
// todayDeaths: 0
// todayRecovered: 0
// updated: 1596336470849

function Table({casesType, tableData}) {

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        className="table"
        columns={[
          { title: 'Country', field: 'country' },
          { title: 'Cases', field: 'cases', type: 'numeric' },
          { title: 'Deaths', field: 'deaths', type: 'numeric' },
          { title: 'Recovered', field: 'recovered', type: 'numeric' }
        ]}
        options={{
          paging: false
        }}
        data={tableData}
        title="Active Live Case Today"
        icons={tableIcons}
      />
  </div>
  )
}

export default Table
