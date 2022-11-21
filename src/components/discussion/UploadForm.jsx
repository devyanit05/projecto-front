import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "40ch",
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const domain = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function UploadForm(props) {
  const [domainName, setDomainName] = React.useState([]);
  const [personName, setPersonName] = React.useState([]);

  const [state, setState] = React.useState({
    problemStatement: "",
    domain: null,
    technologies: null,
    abstract: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // const handleAbstractChange = (event) => {
  //     setState({
  //                     abstract: event.target.value
  //                 })
  //     };

  const theme = useTheme();

  const handleTechChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      value === "string" ? value.split(",") : value
    );
  };

  const handleDomainChange = (event) => {
    const {
      target: { value },
    } = event;
    setDomainName(
      // On autofill we get a stringified value.
      value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, technologies: personName });
    setState({ ...state, domain: domainName });

    console.log(state);
    // console.log(domainName, personName);
    alert(`statement uploaded successfully`);
  };

  return (
    <div className="upload__form">
      <form>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "44ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="form__probstatement">
            <TextField
              label="Problem Statement"
              id="outlined-size-small"
              // defaultValue="Problem Statement"
              size="small"
              value={state.problemStatement}
              name="problemStatement"
              onChange={handleChange}
            />
          </div>
          <div className="form__domain">
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Domain</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={domainName}
                onChange={handleDomainChange}
                input={<OutlinedInput label="Domain" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {domain.map((domain) => (
                  <MenuItem key={domain} value={domain}>
                    <Checkbox checked={domainName.indexOf(domain) > -1} />
                    <ListItemText primary={domain} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form__tech">
            <FormControl sx={{ m: 1, width: "44ch" }}>
              <InputLabel id="demo-multiple-chip-label">
                Technologies
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleTechChange}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Technologies"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form__abstract">
            <TextField
              id="outlined-multiline-flexible"
              label="Abstract"
              multiline
              maxRows={6}
              value={state.abstract}
              name="abstract"
              onChange={handleChange}
              style={{ scrollBehavior: "smooth" }}
            />
          </div>
          <div className="form__btn">
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Upload
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
}
