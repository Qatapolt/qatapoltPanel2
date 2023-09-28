import { InputAdornment, TextField } from "@mui/material";
import { searchIcon } from "../../assets/icons/indext";

const SearchInput = ({onSearch}:any) => {
	return (
		<TextField
			name="search"
			placeholder="Search here"
			sx={{ width: "328px" }}
			onChange={onSearch}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<img src={searchIcon} alt="search" />
					</InputAdornment>
				),
			}}
		/>
	);
};

export default SearchInput;
