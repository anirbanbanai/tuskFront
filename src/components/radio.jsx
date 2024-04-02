import {
    Card,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Typography,
} from "@material-tailwind/react";

const Rradio = () => {
  return (
    <div>
      <section>
      <div className="flex flex-col gap-2">
        <List>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-react"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-react"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              React
            </label>
          </ListItem>

          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-vue"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-vue"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                Vue.js
              </Typography>
            </label>
          </ListItem>

          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-svelte"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-svelte"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                Svelte.js
              </Typography>
            </label>
          </ListItem>
        </List>
      </div>
      </section>

      <label htmlFor="">
        SUu
      <input type="radio" size={300}/>
      </label>
      <label htmlFor="">
        SUu
      <input type="radio" size={300}/>
      </label>

    </div>
  );
};

export default Rradio;
