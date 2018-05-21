import each from 'lodash/each'
import filter from 'lodash/filter'

export default {
    runningSearch(state)
    {
        state.isSearchLoaded = false;
    },

    updateSearchData(state, newState)
    {
        state.is_search_loaded = true;
        state.search_data = Object.assign([], newState);
    },

    runningConfUpdate(state)
    {
        state.is_conf_loaded = false;
    },

    updateConfData(state, newState)
    {
        state.conf_data = Object.assign(state.conf_data, newState);
    },

    completedConfUpdate(state)
    {
        state.is_conf_loaded = true;
    },

    toggleAreaList(state)
    {
        state.is_area_list_open = !state.is_area_list_open;
    },

    toggleRegionList(state)
    {
        state.is_region_list_open = !state.is_region_list_open;
    },

    updateRegionSelection(state, region)
    {
        let selected = !region.selected;
        let oldState = state.conf_data.region_list[index];

        let index = state.conf_data.region_list.indexOf(region);
        this.$set(state.conf_data.region_list, index, Object.assign({}, {
            ...oldState,
            selected
        }));

        each(state.conf_data.area_list, function(obj)
        {
            if(obj.type === region.type)
                obj.selected = selected;
        });
    },

    updateAreaSelection(state, area)
    {
        let selected = !area.selected;
        let oldState = state.conf_data.area_list[index];

        let index = state.conf_data.area_list.indexOf(area);
        this.$set(state.conf_data.area_list, index, Object.assign({}, {
            ...oldState,
            selected
        }));

    },

    resetDefaults(state)
    {
        let areas = filter(state.conf_data.area_list, {selected:true});
        if(!areas.length)
        {
            each(state.conf_data.region_list, function(obj)
            {
                if(obj.type === 'socal') obj.selected = true;
            });

            each(state.conf_data.area_list, function(obj)
            {
                if(obj.type === 'socal') obj.selected = true;
            });
        }
    }
}